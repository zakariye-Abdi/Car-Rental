import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUpForm() {
  return (
    <Box 
      paddingTop={'50px'} 
      marginBottom={'50px'} 
      maxW="md" 
      mx="auto"  
      p={6} 
      borderWidth="1px" 
      borderRadius="lg" 
      backgroundColor={'#F5F5F5'}
    >
      {/* Container for the sign-up form */}
      <VStack>
        
        {/* Sign-up heading */}
        <Text 
          fontSize='40px' 
          marginY={'20px'} 
          textTransform={'uppercase'} 
          fontWeight={'bold'}
        >
          Sign Up
        </Text>

        {/* Form for user sign-up */}
        <form action="">
          
          {/* First Name field */}
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input 
              paddingLeft={'10px'} 
              marginTop={'10px'} 
              width={['200px', '400px']} 
              height={'60px'}  
              type='text' 
              placeholder='Enter your first name' 
            />
          </FormControl>

          {/* Last Name field */}
          <FormControl>
            <FormLabel marginTop={'20px'}>Last Name</FormLabel>
            <Input 
              paddingLeft={'10px'} 
              marginTop={'10px'}  
              width={['200px', '400px']} 
              height={'60px'}  
              type='text' 
              placeholder='Enter your last name' 
            />
          </FormControl>

          {/* Email Address field */}
          <FormControl>
            <FormLabel marginTop={'20px'}>Email Address</FormLabel>
            <Input 
              paddingLeft={'10px'} 
              marginTop={'10px'}  
              width={['200px', '400px']} 
              height={'60px'}  
              type='text' 
              placeholder='Enter your email address' 
            />
          </FormControl>

          {/* Password field */}
          <FormControl>
            <FormLabel marginTop={'20px'}>Password</FormLabel>
            <Input 
              paddingLeft={'10px'} 
              marginTop={'10px'}  
              width={['200px', '400px']} 
              height={'60px'}  
              type='text' 
              placeholder='Enter your password' 
            />
          </FormControl>

          {/* Link to login page */}
          <Text 
            display={'flex'} 
            alignItems={'center'} 
            gap={'5px'} 
            marginTop={'20px'}
          >
            Already have an account? 
            <Text 
              textDecoration={'underline'} 
              transition={'0.2s ease-in-out'} 
              cursor={'pointer'} 
              _hover={{ color: '#DC2D13' }}
            >
              <Link to='/loginUser'>Log In</Link>
            </Text>
          </Text>

          {/* Sign-up button */}
          <Button 
            marginTop={'20px'} 
            backgroundColor={'#DC2D13'} 
            color={'white'} 
            fontSize={'20px'} 
            _hover={{ backgroundColor: '#FFA500' }} 
            transition={'0.2s ease-in-out'}  
            width={['200px', '400px']} 
            height={'60px'}
          >
            Sign Up
          </Button>
        </form>
      </VStack>
    </Box>
  );
}

export default SignUpForm;
