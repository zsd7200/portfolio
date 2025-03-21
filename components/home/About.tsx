'use client';

import { useRef, useState } from 'react';
import { manrope } from "@/components/util/Fonts";
import { useScroll, useMotionValueEvent, motion } from 'motion/react';

export default function About() {
  const containerRef = useRef(null);
  const [circleState, setCircleState] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > circleState) setCircleState((latest > 0.75) ? 1 : latest);
  });

  return (
    <div className="relative flex flex-col w-full">
      <motion.div
        initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
        whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-16"
      >
        <h1 className={`${manrope.className} text-5xl font-[700]`}>about me</h1>
      </motion.div>
      <div className="flex justify-around items-center flex-col sm:flex-row" ref={containerRef}>
        <div className="ml-4 sm:ml-0">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: circleState }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className={`${manrope.className} rounded-full bg-white text-black w-[70vw] h-[70vw] sm:w-[25vw] sm:h-[25vw] flex items-center justify-center`}
          >
          {circleState === 1 &&
            <div className="flex flex-col w-full">
              <motion.div
                initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="mb-8 w-fit mx-auto"
              >
                <h1 className="text-3xl font-[600]">skills</h1>
                <hr className="w-[70%] mx-auto border-gray-200" />
              </motion.div>
              <div className="flex flex-col gap-y-3">
                <motion.div
                  initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                  whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-x-4 justify-between w-[80%] mx-auto"
                >
                  <p className="font-bold">languages:</p>
                  <p className="text-right text-pretty">javascript/typescript, html/css, php, sql, c#, c/c++</p>
                </motion.div>
                <motion.div
                  initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                  whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-x-4 justify-between w-[80%] mx-auto"
                >
                  <p className="font-bold">technologies:</p>
                  <p className="text-right text-pretty">react, next.js, mongodb, node.js, magento 2, docker, linux</p>
                </motion.div>
              </div>
            </div>
          }
          </motion.div>
        </div>
        <div className="mr-14 sm:mr-0 sm:mt-48">
        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: circleState }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className={`${manrope.className} rounded-full bg-white text-black w-[70vw] h-[70vw] sm:w-[25vw] sm:h-[25vw] flex items-center justify-center`}
          >
            {circleState === 1 &&
              <div className="flex flex-col w-full">
                <motion.div
                  initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                  whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className="mb-8 w-fit mx-auto"
                >
                  <h1 className="text-3xl font-[600]">experience</h1>
                  <hr className="w-[70%] mx-auto border-gray-200" />
                </motion.div>
                <div className="flex flex-col gap-y-3">
                  <motion.div
                    initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                    whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 justify-between w-[80%] mx-auto"
                  >
                    <p className="font-bold">web developer:</p>
                    <div className="flex flex-col text-right text-pretty">
                      <span>computer sos, inc.</span>
                      <span className="text-xs italic">nov. 2021—present</span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                    whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 justify-between w-[80%] mx-auto"
                  >
                    <p className="font-bold">web developer:</p>
                    <div className="flex flex-col text-right text-pretty">
                      <span>changeling vr</span>
                      <span className="text-xs italic">june 2020—august 2020</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            }
          </motion.div>
        </div>
        <div className="ml-16 sm:ml-0 sm:mt-16">
        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: circleState }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className={`${manrope.className} rounded-full bg-white text-black w-[70vw] h-[70vw] sm:w-[25vw] sm:h-[25vw] flex items-center justify-center`}
          >
            {circleState === 1 &&
              <div className="flex flex-col w-full">
                <motion.div
                  initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                  whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  viewport={{ once: true }}
                  className="mb-8 w-fit mx-auto"
                >
                  <h1 className="text-3xl font-[600]">education</h1>
                  <hr className="w-[70%] mx-auto border-gray-200" />
                </motion.div>
                <div className="flex flex-col gap-y-3">
                  <motion.div
                    initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                    whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 justify-between w-[80%] mx-auto"
                  >
                    <p className="font-bold">university:</p>
                    <p className="text-right text-pretty">rochester institute of technology</p>
                  </motion.div>
                  <motion.div
                    initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                    whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 justify-between w-[80%] mx-auto"
                  >
                    <p className="font-bold">major:</p>
                    <p className="text-right text-pretty">game design and development</p>
                  </motion.div>
                  <motion.div
                    initial={{ originY: 'bottom', skewX: '30deg', rotateX: '-90deg' }}
                    whileInView={{ originY: 'bottom', skewX: '0deg', rotateX: '0deg' }}
                    transition={{
                      delay: 0.4,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 justify-between w-[80%] mx-auto"
                  >
                    <p className="font-bold">graduated:</p>
                    <p className="text-right text-pretty">spring 2022, 3.48 cumulative GPA</p>
                  </motion.div>
                </div>
              </div>
            }
          </motion.div>
        </div>
      </div>
    </div>
  );
}
