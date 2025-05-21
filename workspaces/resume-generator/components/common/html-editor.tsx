import Editor from 'react-simple-wysiwyg'

interface Props {
  onChange?: (content: string) => void
  value?: string
}

export const HtmlEditor = ({ onChange, value }: Props) => {
  return (
    <Editor
      className="[&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
