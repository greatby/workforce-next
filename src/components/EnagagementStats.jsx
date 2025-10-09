import React from "react";

const EnagagementStats = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="relative top-0 self-start">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Develop engaged & high-performing teams
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            People spend most of their waking hours at work — our goal is to
            make those hours better. Lattice works with People teams across the
            globe to turn managers into leaders, employees into high-performers,
            and companies into the best places to work.
          </p>
          <a
            href="/community"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition"
          >
            Join the community
          </a>
        </div>

        {/* Right Column - Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient mb-2">
              5,000+
            </h3>
            <h4 className="text-base text-gray-600">
              Organizations trust Lattice
            </h4>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient mb-2">
              5.55M
            </h3>
            <h4 className="text-base text-gray-600">
              Pieces of Feedback Shared
            </h4>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient mb-2">
              24,000+
            </h3>
            <h4 className="text-base text-gray-600">
              Resources for Humans Community Members
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnagagementStats;
