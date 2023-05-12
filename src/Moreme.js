import {motion} from "framer-motion";
import "./index.css";
const context = () => {
    return (
      <div className=" w-full p-5 flex justify-center mt-20">
        <div className=" w-auto p-10 ">
          <div className=" p-5 w-[50rem] text-center flex flex-col">
            <motion.h1
              className="text-[50px] font-semibold font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ y: [200, 0], opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
            >
              What I'm about to say is
            </motion.h1>
            <motion.p
            className="text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ y: [200, 0], opacity: 1 }}
              transition={{
                duration: 0.7,
              }}
            >
              Now the {}
              <span className="font-bold text-orange-700 text-[40px]">
                fire
              </span> 
              {} in me is awakened the desired to learn more about web
              development is flaming hot. Im hungry to learn because creating a
              system here is very different I know its hard but its enjoyable.
              Theres so much to learn but Im taking my time and enjoying the
              process.
            </motion.p>
            <motion.p
            className="mt-5 font-semibold text-lg"
              whileInView={{ y: [-10, 10] }}
              transition={{
                repeat:Infinity,
                repeatType:"reverse",
                duration: .7,
            }}
            >
                Whut!?
            </motion.p>
          </div>
        </div>
      </div>
    );
}
 
export default context;