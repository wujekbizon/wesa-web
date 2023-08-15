import { motion } from 'framer-motion'

const WebConsulting: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#5D6DFD',
  secondary = '#7fff00',
}) => {
  return (
    <svg style={{ width, height }} width="56" height="49" viewBox="0 0 56 49" fill="none">
      <mask id="mask0_487_895" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="49">
        <path d="M55.7777 0.388672H0.222168V48.513H55.7777V0.388672Z" fill="white" />
      </mask>
      <g mask="url(#mask0_487_895)">
        <path
          d="M50.5877 48.5135C41.9751 48.5105 33.3595 48.5105 24.7469 48.5105H5.38856C5.20203 48.5105 5.01259 48.5002 4.81272 48.4883C2.81425 48.3744 1.1637 47.1353 0.504946 45.2538C0.428001 45.0346 0.364252 44.8096 0.296197 44.5713C0.272447 44.4855 0.247307 44.4012 0.222168 44.3167V38.7891H3.5662V9.97742H28.7187L28.843 9.55256C28.8519 9.52436 28.8592 9.50367 28.8637 9.48589C28.8844 9.42672 28.9141 9.33631 28.9141 9.21644C28.9141 8.73978 28.9141 8.26158 28.9141 7.78353C28.9141 6.69394 28.9126 5.56742 28.9304 4.46311C28.9392 3.94047 28.9924 3.50978 29.0976 3.14269C29.592 1.40478 31.0369 0.405473 33.0605 0.401028C35.1699 0.398112 37.2809 0.396583 39.3904 0.396583C41.343 0.396583 43.2955 0.396584 45.2495 0.398112H47.3916C47.8194 0.398112 48.2473 0.396583 48.6751 0.393666C49.0999 0.39075 49.5262 0.387695 49.9511 0.387695C50.7934 0.387695 51.4729 0.399638 52.0902 0.424777C54.213 0.510611 55.7615 2.12714 55.7704 4.2677C55.7837 7.81311 55.7851 11.6709 55.7704 16.0616C55.7659 17.681 54.7844 19.0828 53.2701 19.6306C52.4958 19.9105 52.3981 20.4581 52.3981 20.9037C52.4055 24.9421 52.4055 29.0485 52.4055 33.0203V37.6316C52.4055 37.7737 52.4173 37.9069 52.4292 38.0476C52.4351 38.1112 52.4395 38.1777 52.444 38.2488L52.4811 38.801H55.7466C55.7466 39.1681 55.7495 39.5323 55.7511 39.8964C55.7584 41.3827 55.7644 42.786 55.7244 44.2146C55.7126 44.6306 55.5705 45.1309 55.3129 45.6638C54.3862 47.5794 52.8422 48.512 50.5906 48.512H50.5877V48.5135ZM2.3805 41.553C2.3805 41.8031 2.37453 42.0519 2.3687 42.2976C2.35536 42.8556 2.34203 43.4314 2.39828 44.0059C2.54189 45.4639 3.72175 46.3699 5.47592 46.3699H23.8054C32.7097 46.3699 41.6109 46.3699 50.5151 46.3699C50.7238 46.3699 50.9488 46.367 51.1813 46.3448C52.4929 46.2174 53.5129 45.2078 53.609 43.9466C53.6519 43.3901 53.6416 42.8289 53.6312 42.2858C53.6267 42.0444 53.6223 41.8002 53.6223 41.5544V40.9623H2.3805V41.553ZM20.2304 29.1773C18.6509 29.1773 17.1187 29.7339 15.6754 30.8294C13.4327 32.5333 12.4572 35.0262 12.7769 38.237L12.8302 38.7699H27.7445L27.7949 38.2326C28.1429 34.4991 26.8327 31.7901 23.8972 30.178C22.6863 29.5134 21.4531 29.1773 20.2304 29.1773ZM5.73647 38.7551H10.6393L10.6008 38.1274C10.3255 33.6228 12.0249 30.3631 15.7938 28.1619L16.3859 27.8155L15.9566 27.2795C13.708 24.4758 14.4245 21.188 16.2927 19.3894C17.3852 18.3382 18.8034 17.7595 20.2866 17.7595C21.5331 17.7595 22.7248 18.1637 23.7329 18.9274C24.8668 19.786 25.5877 20.9112 25.8749 22.2716C26.2613 24.0953 25.8467 25.7326 24.6077 27.2766L24.1799 27.811L24.7691 28.1574C28.5513 30.3809 30.2523 33.6405 29.968 38.1201L29.9281 38.7492H50.2265V19.977L49.6994 19.9178C49.664 19.9134 49.6313 19.9089 49.6017 19.9045C49.5204 19.8927 49.4359 19.8808 49.3367 19.8808H48.0815C47.3842 19.8794 46.6855 19.8778 45.9883 19.8778C44.4649 19.8778 43.2926 19.8823 42.1868 19.8896C41.7826 19.8927 41.4081 20.0866 41.1654 20.248C39.1949 21.5566 37.1965 22.8948 35.2647 24.1885L33.5801 25.3166V19.9312L32.8324 19.8882C32.7155 19.8807 32.6163 19.8749 32.5187 19.8705C30.6045 19.7713 28.9955 18.1399 28.9333 16.2333C28.9111 15.5596 28.9155 14.8684 28.9199 14.1992C28.9215 13.8869 28.9244 13.5731 28.923 13.2607V12.1387H5.73647V38.7506V38.7551ZM20.2852 19.8956C19.3377 19.8956 18.4051 20.2923 17.7243 20.9837C17.0388 21.6809 16.6702 22.5884 16.6849 23.5387C16.7176 25.4898 18.3326 27.0783 20.2852 27.0783H20.3088C22.2793 27.0649 23.878 25.4542 23.872 23.4855C23.8661 21.5106 22.2599 19.9001 20.2926 19.8956H20.2852ZM35.762 21.2842L36.6829 20.6684C37.0604 20.4152 37.4319 20.1664 37.7976 19.9208C38.8205 19.2339 39.7856 18.5855 40.7716 17.9519C40.9551 17.8335 41.2097 17.7566 41.4184 17.7551C43.4243 17.7433 45.4656 17.7417 47.3709 17.7417H49.9408C50.5315 17.7417 51.122 17.7417 51.7127 17.7417C52.9666 17.7417 53.6298 17.0845 53.6312 15.8455C53.6342 12.0617 53.6342 8.22311 53.6312 4.43936C53.6312 3.21964 52.9666 2.54756 51.763 2.54603C48.6099 2.54311 45.4554 2.54019 42.3022 2.54019C39.1491 2.54019 36.0581 2.54158 32.9361 2.54464C31.7281 2.54464 31.0636 3.21658 31.062 4.432C31.0591 8.23506 31.0591 12.0364 31.062 15.8395C31.062 17.0801 31.7237 17.7373 32.9716 17.7433C33.4024 17.7446 33.8318 17.7462 34.2699 17.7462H35.7591V21.2856L35.762 21.2842Z"
          fill={primary}
        />
        <motion.path
          d="M43.3764 8.86914H41.3247V10.9119H43.3764V8.86914Z"
          fill={secondary}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
        <motion.path
          d="M37.4569 8.89062H35.3948V10.9335H37.4569V8.89062Z"
          fill={secondary}
          animate={{ scale: [0, 2, 0] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
        <motion.path
          d="M49.3082 8.87207H47.249V10.915H49.3082V8.87207Z"
          fill={secondary}
          animate={{ scale: [0, 3, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      </g>
    </svg>
  )
}
export default WebConsulting
