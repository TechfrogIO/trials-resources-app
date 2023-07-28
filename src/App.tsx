import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  View,
  Heading,
  Flex,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { COMPANY, START_DATE } from "./constants/app";
import { createNote, deleteNote, fetchNotes } from "./api/api";
import styled from "@emotion/styled";

interface AppProps {
  signOut?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Note {
  id: string;
  name: string;
  description: string;
}

const AppContainer = styled.div({
  textAlign: "center",
});

const AppHeader = styled.header({
  backgroundColor: "#282c34",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "white",
});

const App = ({ signOut }: AppProps) => {
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    fetchNotes({ setNotes });
  }, []);

  return (
    <AppContainer>
      <Button onClick={signOut}>Sign Out</Button>
      <AppHeader>
        <h1>Bike Trials Resources</h1>
        <p>Lots of hopping up, across, and down on bikes.</p>
        <p>And occassionally crashing.</p>
      </AppHeader>
      <View>
        <Heading level={1}>My Notes App</Heading>
        <View as="form" margin="3rem 0" onSubmit={createNote({ setNotes })}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="name"
              placeholder="Note Name"
              label="Note Name"
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="description"
              placeholder="Note Description"
              label="Note Description"
              labelHidden
              variation="quiet"
              required
            />
            <Button type="submit" variation="primary">
              Create Note
            </Button>
          </Flex>
        </View>
        <Heading level={2}>Current Notes</Heading>
        <View margin="3rem 0">
          {notes.map((note: Note) => (
            <Flex
              key={note.id || note.name}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {note.name}
              </Text>
              <Text as="span">{note.description}</Text>
              <Button
                variation="link"
                onClick={() => deleteNote({ notes, setNotes, id: note.id })}
              >
                Delete note
              </Button>
            </Flex>
          ))}
        </View>
        <Footer company={COMPANY} startDate={START_DATE} />
      </View>
    </AppContainer>
  );
};

export default withAuthenticator(App);
