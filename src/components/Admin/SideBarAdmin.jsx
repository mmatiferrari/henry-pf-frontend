import { useEffect, useState } from 'react'
import { FiMenu, FiHome, FiBell, FiFilter, FiClipboard, FiInfo, FiDelete } from 'react-icons/fi'
import {  GrUserAdmin } from 'react-icons/gr'
import {  RiAdminLine, RiChatDeleteLine } from 'react-icons/ri'
import { Link as Link2, Flex, Menu, MenuButton, useDisclosure, Button, Icon, Avatar, ModalCloseButton, ModalFooter, ModalBody, Heading, Text, Modal, IconButton, ModalOverlay, ModalContent, Stack, Select, ModalHeader, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Tooltip, MenuList, MenuItem } from '@chakra-ui/react'
import NavItem from '../NavItem/NavItem'
import { useColorMode } from '@chakra-ui/color-mode'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [limit, setLimit] = useState([500, 9000])
  const { colorMode, toggleColorMode } = useColorMode()
  const [navSize, changeNavSize] = useState('small')

  return (
      <Flex
        zIndex='2'
        marginTop='10vh'
        backgroundColor={colorMode === 'dark' ? '#2c313d' : '#F8F8F8'}
        w={navSize == 'small' ? '75px' : '400px'}
        flexDir="column"
        justifyContent="space-between"
        height='90vh'
        position='fixed'
      >
        <Flex
          p="5%"
          flexDir="column"
          align-items={navSize == 'small' ? 'center' : 'flex-start'}
          as="nav">
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: (colorMode === 'dark' ? '#3d414c' : 'white') }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize == 'small') changeNavSize('large')
              else changeNavSize('small')
            }}
          />
          <Link to='/adminInterfaz'>
            {window.location.href.replace('http://127.0.0.1:5173', '') === '/home' ? <NavItem navSize={navSize} icon={ GrUserAdmin } title="Inicio" link="/" active /> : <NavItem navSize={navSize} icon={ GrUserAdmin } link="/" title="Inicio" />}
          </Link>
          <Link to='/banner'>
            <NavItem navSize={navSize} icon={ RiAdminLine } title="Bannear usuarios/propietarios" />
          </Link>
          <NavItem navSize={navSize} icon={RiChatDeleteLine} title="Eliminar reseñas" />
          <NavItem navSize={navSize} icon={FiBell} title="Notificaciones" />
          <Flex
            onClick={onOpen}
            mt={30}
            flexDir="column"
            w="100%"
            aling-items={navSize == 'small' ? 'center' : 'flex-start'}
          >
          </Flex>
        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          align-items={navSize == 'small' ? 'center' : 'flex-start'}
          mb={4}
        >
          <Flex mt={4} justifyContent={navSize == 'small' ? 'center' : 'flex-start'} >
            <Link to='/perfil'>
              <Flex>
                <Avatar size="sm" src={null} />
                <Flex flexDir="column" ml={4} display={navSize == 'small' ? 'none' : 'flex'}>
                  <Heading as="h3" size="sm" color="gray.500">SUPER ADMIN</Heading>
                  <Text color="gray">Admin</Text>
                </Flex>
              </Flex>
            </Link>
            <Flex justifyContent={navSize == 'small' ? 'center' : 'flex-start'}
              marginLeft={navSize == 'small' ? 'center' : '40%'}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  display={navSize === 'small' ? 'none' : 'flex'}
                  aria-label='Options'
                  icon={<IoMdArrowDropdown />}
                  variant='outline'>
                </MenuButton>
                <MenuList>
                  <Link to='/perfil'>
                    <MenuItem >
                      Mi perfil
                    </MenuItem>
                  </Link>
                  <MenuItem>Desconectarse</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  )
}
