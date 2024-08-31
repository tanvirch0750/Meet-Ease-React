export default function AboutHero() {
  return (
    <div>
      <div
        className="relative mt-[-100px] pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: '75vh',
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Behind the Spaces: Our Story
                </h1>
                <p className="mt-8 text-xl text-gray-100">
                  Discover the passion and vision that drive us to create the
                  ultimate meeting room booking experience. From our humble
                  beginnings to becoming a trusted partner for businesses
                  everywhere, we’ve always believed in the power of
                  collaboration and the importance of the right environment.
                  Join us on our journey as we continue to innovate, inspire,
                  and empower you to succeed in every meeting, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
