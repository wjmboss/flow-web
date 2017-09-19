import React from 'react'

import classes from './prepare.scss'

export default function PrepareIcon (props) {
  return <i {...props}>
    <svg viewBox='0 0 24 22'>
      <g transform='translate(-1060.000000, -169.000000)' fill='currentColor'>
        <path d='M1072.94118,179.352941 L1070.78431,179.352941
          L1070.78431,183.329657 L1068.74877,181.294118L1067.22549,182.817402
          L1071.86275,187.454657 L1076.51348,182.817402 L1074.97672,181.294118
          L1072.94118,183.329657 Z' className={classes.arrowDown} />
        <path d='M1072.94118,179.352941 Z M1079.23652,169 L1064.48897,169
          L1060,175.120098 L1060,191 L1083.72549,191 L1083.72549,175.120098
          L1079.23652,169 Z M1081.56863,188.843137 L1062.15686,188.843137
          L1062.15686,177.196078 L1069.05882,177.196078
          L1069.05882,175.039216 L1062.73652,175.039216 L1065.58088,171.156863
          L1070.78431,171.156863 L1070.78431,177.196078 L1072.94118,177.196078
          L1072.94118,171.156863 L1078.14461,171.156863 L1080.98897,175.039216
          L1074.66667,175.039216 L1074.66667,177.196078 L1081.56863,177.196078
          L1081.56863,188.843137 Z' />
      </g>
    </svg>
  </i>
}
