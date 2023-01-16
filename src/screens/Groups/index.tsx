import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';

export function Groups() {
  const [ groups, setGroups ] = useState(['Galera da Rocket']);
  
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas" 
        subtitle="jogue com a sua turma"
      />

      <GroupCard title="Galera do trabalho" />
    </Container>
  );
}