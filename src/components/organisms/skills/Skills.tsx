import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { useCallback } from 'react'
import { useElementVisibility } from '../../../hooks'
import { theme } from '../../../utils'
import { SkillsQuery } from '../../../__generated__/graphql'
import { Typography } from '../../atoms'
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

  const { appearedOnce } = useElementVisibility(
    typeof document !== 'undefined' ? document.getElementById('skills') : null,
    0.5
  )

  const maxYearsOfExperience = Math.max(
    ...skills.map((skill) => skill.yearsOfExperience)
  )

  const getSkillPercentage = useCallback(
    (skill: SkillsQuery['gcms']['skills'][0]) =>
      appearedOnce ? (100 * skill.yearsOfExperience) / maxYearsOfExperience : 0,
    [maxYearsOfExperience, appearedOnce]
  )

  const getSkillProgressLabel = useCallback(
    (skill: SkillsQuery['gcms']['skills'][0]) => {
      const postfix = skill.yearsOfExperience === 1 ? 'year' : 'years'

      return `${skill.yearsOfExperience} ${postfix}`
    },
    [maxYearsOfExperience]
  )

  return (
    <div id="skills">
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
    </div>
  )
}

export default Skills
