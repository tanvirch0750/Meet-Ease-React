import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import BlogImgOne from '@/assets/blog-1.jpg';
import BlogImgTwo from '@/assets/blog-2.jpg';
import BlogImgThree from '@/assets/blog-3.jpg';
import SectionHeader from '../section-header/SectionHeader';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

export default function BlogSection() {
  const [, setHoveredId] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Tips for Effective Meeting Room Booking',
      excerpt:
        'Discover key strategies to maximize your meeting room bookings and ensure smooth scheduling.',
      imageUrl: BlogImgOne,
      link: '/blog/5-tips-for-effective-meeting-room-booking',
    },
    {
      id: 2,
      title: 'The Benefits of Co-Working Spaces for Teams',
      excerpt:
        'Learn how co-working spaces can enhance collaboration and productivity for your team.',
      imageUrl: BlogImgTwo,
      link: '/blog/benefits-of-co-working-spaces',
    },
    {
      id: 3,
      title: 'Creating a Productive Meeting Environment',
      excerpt:
        'Explore essential elements for setting up a meeting room that fosters productivity and creativity.',
      imageUrl: BlogImgThree,
      link: '/blog/creating-a-productive-meeting-environment',
    },
  ];

  return (
    <section
      className="pb-32 pt-8 bg-gradient-to-b from-gray-50 to-white"
      id="blogs"
    >
      <SectionHeader
        className="pb-10  max-w-5xl"
        headingSpanOne="Dive Into Our Insights"
        headingSpanTwo="Informative Articles to Enhance Your Experience"
        description="Explore a collection of our latest blog posts, filled with tips, trends, and insights designed to help you make the most of your meeting space. From effective booking strategies to industry news, our articles are tailored to elevate your experience."
      />
      <MaxWidthWrapper className="pb-10 md:pb-0 pt-0 max-w-6xl">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="blogs"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white border-gray-200 group"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <CardTitle className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold group-hover:text-green-500 transition duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-gray-800 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    to={post.link}
                    className="w-full  flex items-center justify-between text-sm font-medium text-primary"
                  >
                    <span className="uppercase tracking-wider text-gray-900">
                      Read Article
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-900" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
