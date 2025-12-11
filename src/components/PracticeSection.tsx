import React from "react";

export default function PracticeSection() {
  return (
    <div className="mt-8 space-y-8">
      {/* Practice with Humans */}
      <div>
        <div className="flex items-center justify-between px-1 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 text-xs">
              📞
            </div>
            <h3 className="text-lg font-semibold">Practice with Humans</h3>
          </div>
          <a className="text-sm text-green-600">Show all →</a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* Card 1 */}
          <div className="min-w-[240px] bg-white rounded-xl shadow-sm border overflow-hidden">
            <img
              src="/assets/animal-1.webp"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold">Favorite Animals</h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-[2px] rounded-full">
                  Be first!
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Talk about your favorite animals and pets
              </p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-full text-sm">
                Join & Start Call
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[240px] bg-white rounded-xl shadow-sm border overflow-hidden">
            <img
              src="/assets/hobbies-1.webp"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold">Hobbies</h4>
              </div>
              <p className="text-sm text-gray-500">
                Share fun activities you enjoy doing!
              </p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-full text-sm">
                Join & Start Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Practice with AI */}
      <div>
        <div className="flex items-center justify-between px-1 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 text-xs">
              🤖
            </div>
            <h3 className="text-lg font-semibold">Practice with AI</h3>
          </div>
          <a className="text-sm text-green-600">Show all →</a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* AI Card 1 */}
          <div className="min-w-[160px] bg-blue-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
            <img
              src="/assets/doremon.png"
              className="w-20 h-20 object-contain"
            />
            <div className="mt-3 text-center text-sm font-medium">
              Talk with Doraemon
            </div>
          </div>

          {/* AI Card 2 */}
          <div className="min-w-[160px] bg-red-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
            <img
              src="/assets/spiderman.png"
              className="w-20 h-20 object-contain"
            />
            <div className="mt-3 text-center text-sm font-medium">
              Talk with Spider Man
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
