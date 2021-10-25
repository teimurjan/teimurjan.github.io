import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { useCallback } from 'react'
import { calculatePercentage, theme } from '../../../utils'
import { SkillsQuery } from '../../../__generated__/graphql'
import { ScrollToArea, Typography } from '../../atoms'
import { useAppContext } from '../../../context'
import { InformativeProgress } from '../../molecules'

const query = graphql`
  query Skills {
    gcms {
      skills(orderBy: yearsOfExperience_DESC) {
        id
        title
        yearsOfExperience
        logo {
          url
        }
      }
    }
  }
`

const Skills = () => {
  const {
    gcms: { skills },
  } = useStaticQuery<SkillsQuery>(query)

  const { visitedLinks } = useAppContext()

  const getSkillPercentage = useCallback(
    (skill: SkillsQuery['gcms']['skills'][0]) =>
      visitedLinks.has('skills')
        ? calculatePercentage(skills, 'yearsOfExperience', skill)
        : 0,
    [visitedLinks.has('skills'), skills]
  )

  const getSkillProgressLabel = useCallback(
    (skill: SkillsQuery['gcms']['skills'][0]) => {
      const postfix = skill.yearsOfExperience === 1 ? 'year' : 'years'

      return `${skill.yearsOfExperience} ${postfix}`
    },
    []
  )

  return (
    <ScrollToArea id="skills" scrollOffset={-120}>
      <Typography.Title
        css={css`
          margin-bottom: ${theme.spacing.medium};
        `}
        variant="h2"
      >
        Skills
      </Typography.Title>
      {skills.map((skill) => (
        <InformativeProgress
          css={css`
            margin-bottom: ${theme.spacing.small};
          `}
          key={skill.id}
          percentage={getSkillPercentage(skill)}
          label={skill.title}
          labelLogoSrc={skill.logo.url}
          progressLabel={getSkillProgressLabel(skill)}
          fullWidth
        />
      ))}
    </ScrollToArea>
  )
}

export default Skills
