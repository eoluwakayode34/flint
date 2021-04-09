import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import {motion} from 'framer-motion'
import logo from './asset/images/logo.svg'
import star from './asset/images/star.svg'

// import box1 from './asset/images/footer-icon-1.svg'
// import box2 from './asset/images/footer-icon-2.svg'
// import box3 from './asset/images/footer-icon-3.svg'
// import box4 from './asset/images/footer-icon-4.svg'
// import box5 from './asset/images/footer-icon-5.svg'
// import box6 from './asset/images/footer-icon-6.svg'
// import box7 from './asset/images/footer-icon-7.svg'
// import box8 from './asset/images/footer-icon-8.svg'
import footer from './asset/images/footer.svg'


const MotionFlex = motion(Flex)
const TwinkleStar = motion(Image)


function App() {

 
  return (
    <Box >
    <Box bg='brand.900' w={['100vw']} h={['100vh','100%']} >
      <Flex justifyContent='center' pt={['35px']} flex='1'>
        <Image src={logo}  margin={0}   w={['9rem','9.4rem','9.8rem','10.1rem']}    />
      </Flex>

        <Flex justifyContent='center' >
          <Flex pos='relative' alignItems='center' mt={['3rem','4rem','5rem','6rem','7rem']} flexDir='column'>
            
        <Heading fontSize={["2.5rem","3rem","3.5rem"]}  fontStyle='normal'
        px={['1rem','2rem','4rem','8rem','16rem','30rem']}
 textAlign='center' font-weight='bold' lineHeight={['3.2rem','3.2rem','4.2rem','4.2rem']} color='white' letterSpacing='1'>We are lifting the veil, for everyone
</Heading>

          <TwinkleStar
          animate={{ rotate: 360, scale: [0, 1, 1.5, 0, 1], opacity:  [1, 0, 1, 1, 0] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }}
          
          src={star} width={['5','8']} pos='absolute' left={['2rem','4rem','8rem','16rem','30rem']} />
          <TwinkleStar
          animate={{ rotate: 360, scale: [1, 0, 1, 1.5, 0], opacity:  [0, 1, 0, 1, 1] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }}
          src={star} width={['5','8']} pos='absolute' right={['2rem','4rem','8rem','16rem','30rem']} top='-5' />
          <TwinkleStar 
          animate={{ rotate: 360, scale: [0, 1, 0, 1, 1.5], opacity:  [1, 0, 1, 0, 1] }}
          transition={{ ease: "easeOut", duration: 2, yoyo: Infinity }} src={star} width={['5','8']} pos='absolute' right={['8rem','10rem','14rem','22rem','36rem']} bottom='0' />
          </Flex>
          
        </Flex>
            <Text textAlign='center' 
            fontSize={['.9rem','1.1rem','1.28rem']}
            px={['1rem','2rem','5rem', '5rem','20rem']}

            letterSpacing='1.2'
              lineHeight ={['1.7rem','1.9rem','2.1rem','2.3rem']}
              my='24px'
            color='white'
            >Flint is a review community that helps people find great places to work. We want to shift the balance of power from the employers to you. </Text>

            <Flex flex='1' flexDir={['column', 'column','row','row']}
              alignItems={['center']}
              justifyContent='center'
              px={[0,0,3,0]}
              >
              <Flex mx={['12px']}  
              width={['90%  ','90%  ','60%  ','35%']}
              //'100%','100%',
              justifyContent='center'
              as='flex'
              
              >

            <Input placeholder="email address"
                     px={['1.1rem','1.3rem','1.6rem','2.2rem']}
                     py={['1.7rem','1.9rem','2rem','2.2rem']}

                    //  py={[  '1.6rem', '2.1rem','2.2rem','2.2rem']}

                    // 90%', '90%',
                    width={[ '100%']}
                    borderRadius='10px'
                   
        bg='white'
        color='black'
        
        />
        </Flex>
        <Flex mx='12px' width={[ '90%','90%', '45%','20%']} my={2}
        //'100%', '100%',
        justifyContent='center'>
        <Button bg="#00251C"
        // px={['1.8rem','1.9rem','2rem','2rem']}
        // py={[  '1.6rem', '2.1rem','2.2rem','2.2rem']}
        px={['1.1rem','1.3rem','1.6rem','2.2rem']}
        py={['1.7rem','1.9rem','2rem','2.2rem']}

        width={[ '100%']}
        //'90%', '90%',
        color='white'
        fontWeight='500'
        borderRadius='10px'


        _hover={{
          color: 'primary.900',
          bg: 'white'
        }}
        variant="solid">
        Get your powers early
        </Button>
              </Flex>
            </Flex>
    </Box>
    <MotionFlex 
    flexDir='row' 
    alignItems='baseline' 
    justifyContent='center'
    w='100%'
    h='11.45rem'
    pos='absolute'
    bottom='0'

    
    
    
    
>
  
          <Image src={footer} w='100%' pos='absolute'
    bottom='0'  margin={0}/>
        {/* <MotionBox>
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
        </MotionBox> */}
      </MotionFlex>  

      </Box>
  );
}

export default App;
