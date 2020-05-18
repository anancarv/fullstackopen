import React from 'react';
import { PartProps } from '../types'

const Part: React.FC<PartProps> = ({part}) => {
    switch (part.name) {
        case "Fundamentals":
          return (
            <p>
                {part.name} {part.description} {part.exerciseCount}
            </p>
          )
        case "Using props to pass data":
            return (
                <p>
                    {part.name} {part.description} {part.exerciseCount} {part.groupProjectCount}
                </p>
              )
        case "Deeper type usage":
            return (
                <p>
                    {part.name} {part.description} {part.exerciseCount} {part.exerciseSubmissionLink}
                </p>
              )
        case "Another course part":
        return (
            <p>
                {part.name} {part.description} {part.exerciseCount} {part.comment}
            </p>
            )
        default:
          return null;
      }
}

export default Part;