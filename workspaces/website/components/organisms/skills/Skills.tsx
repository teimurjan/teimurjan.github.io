import { calculatePercentage } from '@teimurjan/utils'
import { Skill } from '@teimurjan/gql-client'
import Typography from '../../atoms/typography'
import InformativeProgress from '../../molecules/informative-progress'
import gqlClient from '@/gql-client'
import { Anchor } from '@/utils'

const getSkillProgressLabel = (skill: Pick<Skill, 'yearsOfExperience'>) => {
  const postfix = skill.yearsOfExperience === 1 ? 'year' : 'years'

  return `${skill.yearsOfExperience} ${postfix}`
}

const Skills = async () => {
  const { skills } = await gqlClient.Skills()

  return (
    <div id={Anchor.Skills}>
      <Typography.Title className="mb-8" variant="h2">
        Skills
      </Typography.Title>
      {skills.map((skill) => (
        <InformativeProgress
          className="mb-4"
          key={skill.id}
          percentage={calculatePercentage(skills, 'yearsOfExperience', skill)}
          label={skill.title}
          labelLogoSrc={skill.logo.url}
          progressLabel={getSkillProgressLabel(skill)}
          fullWidth
        />
      ))}
    </div>
  )
}

export default Skills
