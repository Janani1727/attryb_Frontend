// import React, { useState } from 'react';
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import axios from 'axios'; // Import axios

// export default function SimpleCard() {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isSignup) {
//         // Registration
//         const response = await axios.post('https://lemon-earthworm-tie.cyclic.cloud/register', formData);
//         setMessage(response.data.msg)
//         .then(response =>console.log( response))
//         .catch(error =>console.log(error))

//       } else {
//         // Login
//         const response = await axios.post('https://lemon-earthworm-tie.cyclic.cloud/login', formData);
//         const { token } = response.data;
//         localStorage.setItem('token', token); // Store the token in local storage
//         setMessage('Login successful. You are now logged in.')
//         .then(response =>console.log( response))
//         .catch(error =>console.log(error))
//       }
//     } 
//         catch (error) {
//             let errorMessage = "An error occurred.";
//             if (error.response && error.response.data) {
//               errorMessage = error.response.data;
//             }
//             console.log(errorMessage);
//     }

//     // Reset form fields after submission
//     setFormData({ name: '', email: '', password: '' });
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}
//     >
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Heading>{isSignup ? 'Sign Up' : 'Sign In'}</Heading>
//         <Box width={'400px'} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
//           <form onSubmit={handleSubmit}>
//             {isSignup && (
//               <FormControl id="name">
//                 <FormLabel>Name</FormLabel>
//                 <Input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//               </FormControl>
//             )}
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//             </FormControl>
//             <Stack spacing={4}>
//               <Button
//                 type="submit"
//                 bg={'blue.400'}
//                 color={'white'}
//                 cursor={'pointer'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//               >
//                 {isSignup ? 'Sign Up' : 'Sign In'}
//               </Button>
//               <Text
//                 cursor={'pointer'}
//                 color={'blue.400'}
//                 onClick={toggleMode}
//               >
//                 {isSignup
//                   ? "Already have an account? Sign in"
//                   : "Don't have an account? Sign up"
//                 }
//               </Text>
//             </Stack>
//           </form>
//           <p>{message}</p>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }



// import React, { useState } from 'react';
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';

// export default function SimpleCard() {
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleMode = () => {
//     setIsSignup(!isSignup);
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         {isSignup ? (
//           <h1>Sign Up</h1>
//         ) : (
//           <h1>Sign In</h1>
//         )}
//         <Box
//         width={"400px"}
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             {isSignup && (
//               <FormControl id="name">
//                 <FormLabel>Name</FormLabel>
//                 <Input type="text" />
//               </FormControl>
//             )}
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input type="password" />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
              
//                 <Text cursor={"pointer"} color={'blue.400'} onClick={toggleMode}>
//                   {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
//                 </Text>
//               </Stack>
//               <Button
//                 bg={'blue.400'}
//                 color={'white'}
//                 cursor={"pointer"}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 {isSignup ? 'Sign up' : 'Sign in'}
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Authentication() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (isSignup) {
        await axios.post("https://lemon-earthworm-tie.cyclic.cloud/register", formData)
        .then(response=>console.log(response))
         .catch(err => console.log(err)) 
         
        

    } else {
        await axios.post("https://lemon-earthworm-tie.cyclic.cloud/login", formData)
        .then(response=>console.log(response))
         .catch(err => console.log(err)) 
    }

    // Reset form fields after submission
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Heading>{isSignup ? 'Sign Up' : 'Sign In'}</Heading>
        <Box width={'400px'} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </FormControl>
            )}
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </FormControl>
            <Stack spacing={4}>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                cursor={'pointer'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
              <Text
                cursor={'pointer'}
                color={'blue.400'}
                onClick={toggleMode}
              >
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"
                }
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
