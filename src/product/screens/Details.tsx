import React, {useState} from "react";

import {Product} from "../types";
import mock from "../mock";
import { Box, Button, Divider, Flex, Img, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
}


const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  const [img, setImg] =  useState(product.pictures[0].url);

  const showImage = (url:string) => {
     setImg(url);
  }


  return (<>
      <Flex justify='space-between' backgroundColor="blackAlpha.100" borderTopRadius='5px' padding="15px">
        <Stack spacing="15px" direction='row' alignItems='center'>
          <Link>Volver al listado</Link>
        
          <Link variant='unstyled'>Juegos y juguetes</Link>
          <Link variant='unstyled'>Peluches</Link>
        </Stack>

        <Stack spacing='15px' direction='row' alignItems='center'>
        <Link>Compartir</Link>
        <Link>Vender uno igual</Link>
        </Stack>
      </Flex>
      <Flex backgroundColor="white" className="ITEM-CONTAINER" padding="15px">
        <Stack className='LEFT' w='60%'>
          <Flex className="ITEM-IMAGE" width='100%'>
            <Stack  direction='column' spacing='40px' width='70px' alignItems='center'>
              

                {(product.pictures).map((picture:any) => (
                
                      <Button onClick={() => showImage(picture.url)}    _focus={{_focus: "none"}}  variant='unstyled'>
                        <Img  
    objectFit='cover'  w='100%' src={picture.url}></Img>
                    </Button>
                
                    
                ))}
              
             
            </Stack>
            <Stack backgroundColor='white' width='90%' minHeight='600px' maxHeight='600px'><Img objectFit='cover' src={img}></Img></Stack>
          </Flex>
        </Stack>
        <Stack className='RIGTH' w='auto'>
          <Text>adassd</Text>
        </Stack>
      </Flex>
  
      </>
    

  );
};

export default DetailsScreen;
