import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function CardWithHeight() {
  let [isActive, setIsActive] = useState(true);

  return (
    <div className="flex items-center space-x-12">
      <div>
        <div className="w-[512px] px-4 py-8 border border-gray-200 rounded shadow">
          <h2 className="mb-4 text-xl font-medium text-gray-800">
            Jumpy height card
          </h2>
          <AnimatePresence initial={false} exitBeforeEnter>
            {isActive ? (
              <motion.div
                key="intro"
                initial="hiding"
                animate="showing"
                exit="hiding"
                variants={{
                  hiding: {
                    opacity: 0,
                  },
                  showing: {
                    opacity: 1,
                  },
                }}
              >
                <p className="text-gray-700">
                  This card has a lot of text in it, but when you toggle it the
                  new content will be much smaller.
                </p>
                <p className="mt-3 text-gray-700">
                  The height will jump when the new text is rendered.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="thankYou"
                initial="hiding"
                animate="showing"
                exit="hiding"
                variants={{
                  hiding: {
                    opacity: 0,
                  },
                  showing: {
                    opacity: 1,
                  },
                }}
              >
                Ok!
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm  min-h-[42px] hover:bg-blue-700 focus:outline-none"
              onClick={() => setIsActive((current) => !current)}
            >
              Toggle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
