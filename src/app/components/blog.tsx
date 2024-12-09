const Blog = () => {
    return (
      <div className="bg-[#FAF4F4] text-black w-full flex flex-col items-center py-10 px-4">
        {/* Section Heading */}
        <h1 className="text-3xl font-bold mb-4">Our Blogs</h1>
        {/* Paragraph */}
        <p className="text-lg text-center max-w-[800px] mb-8">
          Explore the latest updates, tips, and insights from our blog section.
        </p>
        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="w-[393px] h-[555px]  rounded-md overflow-hidden">
            <img
              src="/b1.png"
              alt="Blog Post 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[393px] h-[555px] rounded-md overflow-hidden">
            <img
              src="/b2.png"
              alt="Blog Post 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[393px] h-[555px]  rounded-md overflow-hidden">
            <img
              src="/b3.png"
              alt="Blog Post 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* View All Posts Button */}
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-700 mb-4">
          View All Posts
        </button>
        {/* Gray Line */}
        <hr className="w-[150px] border-gray-300" />
      </div>
    );
  };
  
  export default Blog;
  