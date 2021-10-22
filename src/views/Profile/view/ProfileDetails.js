import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import { ArrowRight, Archive, Award, FileText, User, FilePlus, BookOpen, Briefcase } from 'react-feather'
import EducationalDetails from './steps/EducationalDetails'
import ProfessionalDetails from './steps/ProfessionalDetails'
import PersonalInfo from './steps/PersonalInfo'
import AddResume from './steps/AddResume'
import Skills from './steps/Skills'

const ProfileDetails = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'file',
      title: 'Attach Resume',
      subtitle: 'Attach Your Resume.',
      icon: <FilePlus size={18} />,
      content: <AddResume stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'personal-info',
      title: 'Personal Information',
      subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'educational-details',
      title: 'Educational-Details',
      subtitle: 'Add Educational-Details',
      icon: <BookOpen size={18} />,
      content: <EducationalDetails stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'Professional-Details',
      title: 'Professional-Details',
      subtitle: 'Add Professional-Details',
      icon: <Briefcase size={18} />,
      content: <ProfessionalDetails stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'skills',
      title: 'Skills',
      subtitle: 'Add Skills',
      icon: <Award size={18} />,
      content: <Skills stepper={stepper} type='wizard-horizontal' />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default ProfileDetails
