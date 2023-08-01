import { API } from "aws-amplify";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../graphql/mutations";
import { listNotes } from "../graphql/queries";
import { Note } from "../pages/EditorPage";

interface ApiProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

interface DeleteProps extends ApiProps {
  notes: Note[];
  id: string;
}

export const fetchNotes = async ({ setNotes }: ApiProps) => {
  const apiData = await API.graphql({ query: listNotes });
  const notesFromAPI = (apiData as any).data.listNotes.items;
  setNotes(notesFromAPI);
};

export const createNote =
  ({ setNotes }: ApiProps) =>
  async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes({ setNotes });
    event.target.reset();
  };

export const deleteNote = async ({ notes, setNotes, id }: DeleteProps) => {
  const newNotes = notes.filter((note: { id: any }) => note.id !== id);
  setNotes(newNotes);
  await API.graphql({
    query: deleteNoteMutation,
    variables: { input: { id } },
  });
};
