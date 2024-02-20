import React, { useEffect, useState } from 'react';
import { Flex, Group, Card, Text, Button} from '@mantine/core';
import { IconAwardFilled, IconTrash } from '@tabler/icons-react';

const InfoCard = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setName(json);
  };

  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      align={{ base: 'center', sm: 'start' }} // Align items to the top on small screens
    >
      <Group>
        <Card
          shadow="sm"
          p={0} // Remove padding
          radius="md"
          withBorder
          w={{ base: '100%', sm: 400 }} // Full width on small screens, fixed width on larger screens
          h={500}
        >
          <Flex
            direction="column"
            align="center" // Center align items vertically
            justify="center" // Center align items horizontally
            style={{ height: '100%' }} // Set card content to fill the whole height
          >
            <img
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
              style={{ marginBottom: 16 }} // Add margin to bottom of image
            />

            {name && (
              <div style={{ textAlign: 'center' }}>
                <Text weight={500} color='red' size='lg' font='bold'>{name[0].name}</Text>
                <Text weight={600}>✉️{name[0].email}</Text>
                <Text weight={600}>📱{name[0].phone}</Text>
                <Text weight={600}>🌐{name[0].website}</Text>
              </div>
            )}

            <Group justify='center' pt={14}>
              <Button size='md' color="blue" leftSection={<IconAwardFilled size={14} />}>Follow</Button>
              <Button size='md' color="red" leftSection={<IconTrash size={14} />}>Delete</Button>
            </Group>
          </Flex>
        </Card>
      </Group>
    </Flex>
  );
};

export default InfoCard;
