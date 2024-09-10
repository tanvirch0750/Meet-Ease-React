import UserImg from '../../assets/customer-4.jpg';
import MaxWidthWrapper from '../ui/max-width-wrapper';

export default function CustomerComments() {
  return (
    <section className="bg-gray-100 border-t border-gray-300 py-14">
      <MaxWidthWrapper className=" max-w-5xl">
        <h2 className="text-2xl font-bold mb-12 text-gray-900">
          Customer Comments
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <img
                src={UserImg}
                alt="User Avatar"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  John Doe
                </h3>
                <p className="text-sm text-gray-700">
                  Posted on March 15, 2024
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-lg">
              Great product! I've been using it for a week now and I'm very
              satisfied with its performance.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <img
                src={UserImg}
                alt="User Avatar"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  John Doe
                </h3>
                <p className="text-sm text-gray-700">
                  Posted on March 15, 2024
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-lg">
              Great product! I've been using it for a week now and I'm very
              satisfied with its performance.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <img
                src={UserImg}
                alt="User Avatar"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  John Doe
                </h3>
                <p className="text-sm text-gray-700">
                  Posted on March 15, 2024
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-lg">
              Great product! I've been using it for a week now and I'm very
              satisfied with its performance.
            </p>
          </div>
        </div>

        <form className="mt-8 bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Add a Comment
          </h3>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-800 text-gray-800"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Post Comment
          </button>
        </form>
      </MaxWidthWrapper>
    </section>
  );
}
