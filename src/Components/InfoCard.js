import React, { useEffect, useState } from 'react';
import { Flex, Group, Card, Text, Button} from '@mantine/core';
import { IconAwardFilled, IconStar, IconTrash } from '@tabler/icons-react';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';

const InfoCard = () => {
  const [user, setUser] = useState(null);
  const [text,setText]=useState('Follow')
  const userData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    console.log(json)
    setUser(json);
  };
  useEffect(() => {
    userData();
  }, []);
  const handleDelete=(id)=>{
    setUser(user.filter((item) => item.id !== id));
  }
  const handleFollow=()=>{
    setText((prevText) => (prevText === 'Follow' ? 'Unfollow' : 'Follow'));
  }
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      align={{ base: 'center', sm: 'start' }} 
    ><Group>
      {user && user.map((item,key)=>(
        <Card key={item.id}
          shadow="sm"
          p={0} 
          radius="md"
          withBorder
          w={{ base: '100%', sm: 400 }} 
          h={500} 
        >
          <Flex
            direction="column"
            align="center" 
            justify="center"
            style={{ height: '100%' }} 
          >
            <img
              src={`data:image/svg+xml,${encodeURIComponent(createAvatar(initials, { seed: item.name }).toString())}`}
              height={160}
              alt="Norway"
              style={{ marginBottom: 16 }} 
            />
              <div style={{ textAlign: 'center' }} >
                <Text weight={500} color='red' size='lg' font='bold'>{item?.name}{text==='Follow' ? ' ' : <IconStar color='black' size={18}/>}</Text>
                <Text weight={600}>✉️{item?.email}</Text>
                <Text weight={600}>📱{item?.phone}</Text>
                <Text weight={600}>🌐{item?.website}</Text>
              </div>

            <Group justify='center' pt={14}>
              <Button size='md' color="blue" leftSection={<IconAwardFilled size={14} />} onClick={handleFollow}>{text}</Button>
              <Button size='md' color="red" leftSection={<IconTrash size={14} />} onClick={()=>handleDelete(item.id)}>Delete</Button>
            </Group>
          </Flex>
        </Card>
      
      )) }
      </Group>
    </Flex>
  );
};

export default InfoCard;
