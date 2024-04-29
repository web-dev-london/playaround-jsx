import { Button, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'
import QRCode from 'react-qr-code'


const QrCodeGenerator = () => {

  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')


  const handleGenerate = (e) => {
    e.preventDefault()
    setQrCode(input)
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const active = input
    && input.trim() !== ''
    ? false
    : true

  return (
    <>
      <Heading
        as={'h4'}
        fontSize={'18px'}
        mb={'2rem'}
      >
        QR Code Generator
      </Heading>
      <form onSubmit={handleGenerate}>
        <Input
          size={'sm'}
          htmlSize={25}
          value={input}
          type='text'
          name='qr-code'
          width={'auto'}
          mb={5}
          placeholder='Generate your code'
          onChange={handleChange}
        />
        <Button
          size={'sm'}
          colorScheme='teal'
          disabled={active}
          type={'submit'}
        >
          Generate
        </Button>
      </form>
      <QRCode
        id={'qr-code-value'}
        value={qrCode}
      />
    </>
  )
}

export default QrCodeGenerator