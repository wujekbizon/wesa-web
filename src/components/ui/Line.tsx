type LineProps = {
  width?: string
  height?: number
  color?: string
  style?: React.CSSProperties
  className?: string
}

const Line = ({ width = '80%', height = 6, color, style, className }: LineProps) => {
  return (
    <div
      className={className}
      style={{
        width,
        height: `${height}px`,
        backgroundColor: color || '#7fff00',
        borderRadius: '5px',

        ...style,
      }}
    />
  )
}
export default Line
