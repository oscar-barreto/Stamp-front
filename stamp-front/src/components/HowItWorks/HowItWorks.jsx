import {motion} from 'framer-motion';
import ideas from '../../assets/images/ideas.jpg';
import work from '../../assets/images/work.jpg';
import marketing from '../../assets/images/marketing.jpg';

const images = [ideas, work,marketing]

const HowItWorks = () => {
  return (
    <>
        <div className='w-100 p-20 bg-black overflow-hidden'>
            <motion.div className='cursor-grab'>
                <motion.div className='flex justify-center items-center'>
                    {images.map(image => (
                        <motion.div className='h-80' key={image}>
                            <img className='h-80 w-96 rounded m-5 p-1' src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default HowItWorks