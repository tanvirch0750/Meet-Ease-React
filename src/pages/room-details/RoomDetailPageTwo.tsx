import { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Star,
  Check,
  ArrowRight,
  ArrowLeft,
  Maximize2,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-xl group">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Room view ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.95 }}
          transition={{
            opacity: { duration: 0.4, ease: 'easeInOut' },
            x: { duration: 0.4, ease: 'easeInOut' },
            scale: { duration: 0.4 },
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          onClick={prevImage}
          className="bg-white/80 hover:bg-white hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4 " />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="bg-white/80 hover:bg-white hover:text-gray-800"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-gray-800"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 flex items-center justify-center">
          <div className="relative w-full h-full bg-black/90 flex items-center justify-center">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Room view ${currentIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.5, ease: 'easeInOut' },
                  x: { duration: 0.5, ease: 'easeInOut' },
                  scale: { duration: 0.5 },
                }}
              />
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 left-4 bg-white/80 hover:bg-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ArrowLeft className="h-4 w-4 text-gray-800" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-16 bg-white/80 hover:bg-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ArrowRight className="h-4 w-4 text-gray-800" />
            </Button>
            <DialogClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white z-10"
              >
                <X className="h-4 w-4 text-gray-800" />
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default function RoomDetailPage() {
  // @ts-ignore
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Demo data
  const room = {
    id: '1',
    name: 'Luxury Ocean View Suite',
    category: 'Premium',
    pricePerSlot: 15000,
    description:
      'Experience unparalleled luxury in our Ocean View Suite. Wake up to breathtaking panoramas of the azure sea, enjoy top-tier amenities, and indulge in the epitome of coastal living.',
    roomNo: '501',
    floorNo: '5',
    capacity: 4,
    size: '60 m²',
    averageRating: 4.8,
    totalReviews: 124,
    amenities: [
      'Free Wi-Fi',
      'Smart Coffee Maker',
      '8K OLED TV',
      'Hydro Massage Tub',
      'AI Kitchen Assistant',
      'Ocean View',
      'King Size Bed',
      'Private Balcony',
    ],
    images: [
      'https://i.ibb.co.com/xGKLBvS/il-one.jpg',
      'https://i.ibb.co.com/HK3y7R3/il-4.jpg',
      'https://i.ibb.co.com/kDhHSB5/il-2.jpg',
      'https://i.ibb.co.com/2jRFw19/il-3.jpg',
    ],
    reviews: [
      {
        id: '1',
        user: 'Alice Johnson',
        rating: 5,
        comment:
          'Absolutely stunning! The view was breathtaking and the amenities were top-notch.',
        avatar: '/placeholder.svg?height=40&width=40',
      },
      {
        id: '2',
        user: 'Bob Smith',
        rating: 4,
        comment:
          'Great room with excellent service. The only minor issue was the Wi-Fi being a bit slow at times.',
        avatar: '/placeholder.svg?height=40&width=40',
      },
      {
        id: '3',
        user: 'Carol Davis',
        rating: 5,
        comment:
          'Perfection! From the moment we stepped in, we felt like royalty. Will definitely return!',
        avatar: '/placeholder.svg?height=40&width=40',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/rooms"
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-600 font-semibold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Rooms</span>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text">
            {room.name}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <ImageGallery images={room.images} />
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-500">
                    {room.name}
                  </h2>
                  <Badge
                    variant="secondary"
                    className="mt-2 text-lg bg-gradient-to-r from-sky-500 to-emerald-500 text-white"
                  >
                    {room.category}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(room.averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">
                    {room.averageRating} ({room.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-lg leading-relaxed text-gray-700">
                {room.description}
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                <Card className="bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Room
                    </h3>
                    <p className="text-3xl font-bold text-gray-600">
                      {room.roomNo}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Floor
                    </h3>
                    <p className="text-3xl font-bold text-gray-600">
                      {room.floorNo}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Capacity
                    </h3>
                    <p className="text-3xl font-bold text-gray-600">
                      {room.capacity}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-lg transition-shadow duration-300 border-gray-100">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Amenities
                    </h3>
                    <p className="text-3xl font-bold text-gray-600">6</p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity) => (
                  <motion.div
                    key={amenity}
                    className="flex items-center space-x-3 bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-[16px] text-gray-800 font-medium">
                      {amenity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-lg sticky top-24 border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Book Your Stay</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ৳{room.pricePerSlot}
                  </span>
                  <span className="ml-2">per night</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-semibold"
                  >
                    Book Now
                  </Button>
                </motion.div>
                <p className="text-sm mt-4 text-center">
                  Free cancellation up to 24 hours before check-in
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="mt-12"
          >
            <TabsList className="w-full bg-transparent rounded-lg p-1 flex space-x-2 ">
              <TabsTrigger
                value="overview"
                className="flex-1 py-3 font-semibold rounded-md bg-gray-100 text-gray-900 transition-all duration-300 ease-in-out data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-200 data-[state=active]:to-gray-200 data-[state=active]:text-gray-900 hover:bg-emerald-100"
                style={{
                  backgroundColor:
                    activeTab === 'overview' ? 'transparent' : '#f3f4f6',
                }} // Ensure non-active background color
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="flex-1 py-3 font-semibold rounded-md bg-gray-100 text-gray-900 transition-all duration-300 ease-in-out data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-200 data-[state=active]:to-gray-200 data-[state=active]:text-gray-900 hover:bg-emerald-100"
                style={{
                  backgroundColor:
                    activeTab === 'reviews' ? 'transparent' : '#f3f4f6',
                }}
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="policies"
                className="flex-1 py-3 font-semibold rounded-md bg-gray-100 text-gray-900 transition-all duration-300 ease-in-out data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-200 data-[state=active]:to-gray-200 data-[state=active]:text-gray-900 hover:bg-emerald-100"
                style={{
                  backgroundColor:
                    activeTab === 'policies' ? 'transparent' : '#f3f4f6',
                }}
              >
                Policies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card className="bg-white border-gray-300 shadow-md rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Room Overview
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    Indulge in the epitome of luxury with our Ocean View
                    Suite...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {room.reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-white border-gray-300 shadow-sm rounded-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12 bg-gray-100">
                            <AvatarImage
                              src={review.avatar}
                              alt={review.user}
                            />
                            <AvatarFallback className="text-gray-700 border border-gray-300">
                              {review.user.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-lg text-gray-900">
                                {review.user}
                              </h4>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-5 h-5 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="mt-2 text-gray-700">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="policies" className="mt-6">
              <Card className="bg-white border-gray-300 shadow-sm rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Room Policies
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Smart check-in available 24/7',
                      'AI-powered room service',
                      'Eco-friendly mode activation',
                      'Virtual concierge assistance',
                      'Biometric security system',
                    ].map((policy, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                        <span>{policy}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </main>
    </div>
  );
}
