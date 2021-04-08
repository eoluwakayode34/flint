import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import {motion} from 'framer-motion'
import logo from './asset/images/logo.svg'
import star from './asset/images/star.svg'

import box1 from './asset/images/footer-icon-1.svg'
import box2 from './asset/images/footer-icon-2.svg'
import box3 from './asset/images/footer-icon-3.svg'
import box4 from './asset/images/footer-icon-4.svg'
import box5 from './asset/images/footer-icon-5.svg'
import box6 from './asset/images/footer-icon-6.svg'
import box7 from './asset/images/footer-icon-7.svg'
import box8 from './asset/images/footer-icon-8.svg'


const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const TwinkleStar = motion(Image)


function App() {

 
  return (
    <Box bg='brand.900' w={['100vw']} h={['100%','100%']}>
      <Flex justifyContent='center' flex='1'>
        <Image src={logo} my={10}  h='2rem'    />
      </Flex>

        <Flex justifyContent='center' mt='4rem'>
          <Flex pos='relative' alignItems='center' flexDir='column'>
            
        <Heading fontSize={["2rem","3rem","4rem"]} textAlign='center' font-weight='700' lineHeight='1' color='white' letterSpacing='1px'>Lifting the veil, <br/>         for everyone
</Heading>

          <TwinkleStar
          animate={{ rotate: 360, scale: [0, 1, 1.5, 0, 1], opacity:  [1, 0, 1, 1, 0] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }}
          
          src={star} width={['5','8']} pos='absolute' left={['-5','-8']} />
          <TwinkleStar
          animate={{ rotate: 360, scale: [1, 0, 1, 1.5, 0], opacity:  [0, 1, 0, 1, 1] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }}
          src={star} width={['5','8']} pos='absolute' right={['-2','-5']} top='-5' />
          <TwinkleStar 
          animate={{ rotate: 360, scale: [0, 1, 0, 1, 1.5], opacity:  [1, 0, 1, 0, 1] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }} src={star} width={['5','8']} pos='absolute' right={['2px','2px']} bottom='0' />
          </Flex>
          
        </Flex>
            <Text textAlign='center' 
            fontSize={["1rem","1.5rem","2rem"]} 
            padding={["1rem","1.5rem","2rem"]} 
            px={['5','10','0']}

            letterSpacing='1.2'
              lineHeight ='1.2'
              mt='6'
            color='white'
            >We are taking the power from the employer  and  <Box display={['none','none', 'block']} as='br'/> putting it in your hands.</Text>

            <Flex py='3rem' flex='1' flexDir={['column','column','row']}
              alignItems={['center']}
              justifyContent='center'
              px={['0','10','0']}
              >
              <Flex mx={['.4rem']}  
              width={['100%','100%','40%']}
              justifyContent='center'
              as='flex'
              
              >

            <Input placeholder="email address"
                    p={['1.4rem','2rem']}
                    width={['90%', '90%', '100%']}
                   
        bg='white'
        color='black'
        
        />
        </Flex>
        <Flex mx='.4rem' width={['100%', '100%', '25%']} my={2}
        justifyContent='center'>
        <Button bg="primary.900"
        p={['1.4rem','2rem']}
        width={['90%', '90%', '100%']}
        color='white'
        fontWeight='500'
        _hover={{
          color: 'primary.900',
          bg: 'white'
        }}
        variant="solid">
        Get your powers early
        </Button>
              </Flex>
            </Flex>  

            <MotionFlex 
            flexDir='row' 
            alignItems='baseline' 
            justifyContent='center'
            w='100%'
            px='.4rem'
            
            mt={['6rem', "4rem", "1rem"]}
          bottom={0}
  >
                <MotionBox   >
                  <Image src={box1} />
                </MotionBox>
                <MotionBox>
                <Image src={box2} />
                </MotionBox>
                <MotionBox>
                <Image src={box3} />
                </MotionBox>
                <MotionBox>
                <Image src={box4} />
                </MotionBox>
                <MotionBox>
                <Image src={box5} />
                </MotionBox>
                <MotionBox>
                <Image src={box6} />
                </MotionBox>
                <MotionBox>
                <Image src={box7} />
                </MotionBox>
                <MotionBox>
                <Image src={box8} />
                </MotionBox>
              </MotionFlex>    
    </Box>
  );
}

export default App;
