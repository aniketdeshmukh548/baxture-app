import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'

const InfoCard = () => {
    const [name,setName]=useState(null)
    useEffect(()=>{
        userData()
    },[])
    const userData=async()=>{
        const data=await fetch("https://jsonplaceholder.typicode.com/users");
        const json= await data.json();
        console.log(json)
        setName(json)
    }
      
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder w={400} h={500} >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

        {name && <Text weight={500} color='red' size='lg' font='bold'>{name[0].name}</Text>}
        {name && <Text weight={600}>✉️{name[0].email}</Text>}
        {name && <Text weight={600}>📱{name[0].phone}</Text>}
        {name && <Text weight={600}>🌐{name[0].website}</Text>}


      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  )
}

export default InfoCard