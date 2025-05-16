import { Button, ButtonProps } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { downloadByUrl } from '@teimurjan/resume'
import { Eye, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Props extends ButtonProps {
  generatePdfUrl: () => Promise<string | undefined>
  filename: string
}

export const PdfPreviewButton = ({
  generatePdfUrl,
  filename,
  children = (
    <>
      Preview
      <Eye />
    </>
  ),
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string>()

  useEffect(() => {
    const initPdfUrl = async () => {
      if (isOpen) {
        const url = await generatePdfUrl()
        setPdfUrl(url)
      }
    }

    initPdfUrl()
  }, [isOpen, generatePdfUrl])

  const handleDownloadClick = () => {
    if (pdfUrl) {
      downloadByUrl(pdfUrl, filename)
    }
  }

  return (
    <Dialog onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button {...rest}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-full! flex flex-col px-20">
        {pdfUrl ? (
          <iframe className="w-full flex-1" src={pdfUrl} />
        ) : (
          <div className="flex items-center justify-center flex-1">
            <Loader2 className="animate-spin" />
          </div>
        )}
        <Button className="w-full" onClick={handleDownloadClick}>
          Download
        </Button>
      </DialogContent>
    </Dialog>
  )
}
