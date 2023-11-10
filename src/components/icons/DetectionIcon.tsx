import { motion } from 'framer-motion'

const Detection: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#5D6DFD',
  secondary = '#7fff00',
}) => {
  return (
    <svg style={{ width, height }} width="50" height="51" viewBox="0 0 50 51" fill="none">
      <g clipPath="url(#clip0_201_5880)">
        <path d="M43.4803 42.6924V45.2662H40.9065" stroke={primary} strokeWidth="2.77968" strokeMiterlimit="10" />
        <path
          d="M36.1195 45.2666H9.79834"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
          strokeDasharray="7.76 7.76"
        />
        <path d="M7.41387 45.2662H4.84009V42.6924" stroke={primary} strokeWidth="2.77968" strokeMiterlimit="10" />
        <path
          d="M4.84009 37.9062V11.585"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
          strokeDasharray="7.76 7.76"
        />
        <path d="M4.84009 9.19878V6.625H7.41387" stroke={primary} strokeWidth="2.77968" strokeMiterlimit="10" />
        <path
          d="M12.1824 6.625H38.5036"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
          strokeDasharray="7.76 7.76"
        />
        <path d="M40.9065 6.625H43.4803V9.19878" stroke={primary} strokeWidth="2.77968" strokeMiterlimit="10" />
        <path
          d="M43.4802 13.9854V40.2894"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
          strokeDasharray="7.76 7.76"
        />
        <motion.path
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          d="M24.1605 16.6631H24.1433C19.026 16.6631 14.8777 20.8114 14.8777 25.9287V25.9459C14.8777 31.0631 19.026 35.2115 24.1433 35.2115H24.1605C29.2777 35.2115 33.4261 31.0631 33.4261 25.9459V25.9287C33.4261 20.8114 29.2777 16.6631 24.1605 16.6631Z"
          stroke={secondary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
        />
        <path
          d="M10.1245 1.75195H0.858887V11.0176H10.1245V1.75195Z"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
        />
        <path
          d="M49.1435 1.99121H39.8779V11.2568H49.1435V1.99121Z"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
        />
        <path
          d="M10.1245 40.5127H0.858887V49.7783H10.1245V40.5127Z"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
        />
        <path
          d="M49.1435 40.7354H39.8779V50.001H49.1435V40.7354Z"
          stroke={primary}
          strokeWidth="2.77968"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_5880">
          <rect width="50" height="49.9828" fill="white" transform="translate(0 0.893555)" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Detection
