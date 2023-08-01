import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { COMPANY, START_DATE } from "../constants/app";
import { createNote, deleteNote, fetchNotes } from "../api/api";
import styled from "@emotion/styled";

interface EditorPageProps {
  signOut?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Note {
  id: string;
  name: string;
  description: string;
}

const EditorPageContainer = styled.div({
  textAlign: "center",
});

const EditorPageHeader = styled.header({
  backgroundColor: "#282c34",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "white",
});

const CreateNoteContainer = styled.div({
  flexDirection: "row",
  justifyContent: "center",
});

const NoteContainer = styled.div({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const EditorPage = ({ signOut }: EditorPageProps) => {
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    fetchNotes({ setNotes });
  }, []);

  return (
    <EditorPageContainer>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
      <EditorPageHeader>
        <h1>Bike Trials Resources</h1>
        <p>Lots of hopping up, across, and down on bikes.</p>
        <p>And occassionally crashing.</p>
      </EditorPageHeader>
      <div>
        <h1>My Notes App</h1>
        <form onSubmit={createNote({ setNotes })}>
          <CreateNoteContainer>
            <input name="name" placeholder="Note Name" required />
            <input name="description" placeholder="Note Description" required />
            <button type="submit">Create Note</button>
          </CreateNoteContainer>
        </form>
        <h2>Current Notes</h2>
        <div>
          {notes.map((note: Note) => (
            <NoteContainer key={note.id || note.name}>
              <span>{note.name}</span>: <span>{note.description}</span>
              <button
                onClick={() => deleteNote({ notes, setNotes, id: note.id })}
              >
                Delete note
              </button>
            </NoteContainer>
          ))}
        </div>
        <Footer company={COMPANY} startDate={START_DATE} />
      </div>
    </EditorPageContainer>
  );
};

export default withAuthenticator(EditorPage);
