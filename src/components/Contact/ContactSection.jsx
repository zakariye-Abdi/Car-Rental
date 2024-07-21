
import { Box, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

import './Contact.css'

function ContactSection() {
  return (
    // Main container for the contact section
    <Box backgroundColor={'#F5F5F5'} width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      
      // Form element with onSubmit handler to prevent default form submission
      <form onSubmit={(e) => e.preventDefault()} >
        
        // Vertical stack (VStack) to arrange form elements vertically with spacing
        <VStack>
          
          // Form control for the "Name" input field
          <FormControl>
            <FormLabel fontSize={'20px'} marginBottom={'10px'}>Name :</FormLabel>
            <Input boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.0)" paddingLeft={'10px'} width={['200px', '400px']} height={'60px'} type='text' placeholder='Enter your name ' />
          </FormControl>

          // Form control for the "Last Name" input field
          <FormControl>
            <FormLabel fontSize={'20px'} marginBottom={'10px'} marginTop={'20px'}>Last Name :</FormLabel>
            <Input boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.0)" paddingLeft={'10px'} type='text' placeholder='Enter your last name ' width={['200px', '400px']} height={'60px'} />
          </FormControl>

          // Form control for the "Email" input field
          <FormControl>
            <FormLabel fontSize={'20px'} marginBottom={'10px'} marginTop={'20px'}>Email :</FormLabel>
            <Input boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.0)" paddingLeft={'10px'} width={['200px', '400px']} height={'60px'} type='email' placeholder='Enter your email ' />
          </FormControl>

          // Form control for the "Message" textarea field
          <FormControl>
            <FormLabel fontSize={'20px'} marginBottom={'10px'} marginTop={'20px'}>Message :</FormLabel>
            <Textarea boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.0)" placeholder='Enter your message' width={['200px', '400px']} height={'150px'} padding={'10px'} />
          </FormControl>
        
        </VStack>
      </form>
    
    </Box>
  )
}

export default ContactSection
