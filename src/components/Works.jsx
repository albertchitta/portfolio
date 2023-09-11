import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, externalLink, closeBlack } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website, video }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            <button
                type="button"
                onClick={handleShow}
                className="text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white shadow-md shadow-primary rounded-xl py-1 px-4 bg-purple-900"
              >
                Learn More
              </button>
          </div>
        </Tilt>
      </motion.div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <div className="flex items-center justify-between w-full">
            <Modal.Title style={{ color: '#2f4550' }}>{name}</Modal.Title>
            <img
              src={closeBlack}
              alt="github"
              className="cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </Modal.Header>
        <Modal.Body style={{ color: '#586f7c' }}>
          <div>
            <iframe
              src={video}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              title={name}
              className="w-full h-80 mb-8"
            />
            <p>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer as="div" bsPrefix="modal-footer">
          <div className="flex gap-3">
            <a
              aria-label="github"
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white shadow-md shadow-primary rounded-xl py-1 px-4 bg-purple-900 gap-2"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object contain"
              />
              <span>GitHub</span>
            </a>
            <a
              aria-label="website"
              href={website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white shadow-md shadow-primary rounded-xl py-1 px-4 bg-purple-900 gap-2"
            >
              <img
                src={externalLink}
                alt="github"
                className="w-5 h-5 object contain"
              />
              <span>Website</span>
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  website: PropTypes.string,
  video: PropTypes.string,
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
