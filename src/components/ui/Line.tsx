const Line = ({
  width = '80%',
  height = 6,
  color,
  style,
}: {
  width?: string
  height?: number
  color?: string
  style?: React.CSSProperties
}) => {
  return (
    <div
      style={{
        width,
        height: `${height}px`,
        backgroundColor: color || '#7fff00',
        borderRadius: '5px',
        margin: '30px 0',
        ...style,
      }}
    />
  )
}
export default Line
