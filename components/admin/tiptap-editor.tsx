import { EditorContent, EditorProvider, useCurrentEditor, useEditor, } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { Editor } from "@tiptap/core";


interface FormContent {
  formContent: string | undefined;
  setFormContent: (value: string) => void
}

const MenuBar = ({ editor }: {editor: Editor | null}) => {

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${
          editor.isActive("bold")
            ? "is-active bg-primary text-primary-foreground"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        bold
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${
          editor.isActive("italic")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        italic
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${
          editor.isActive("strike")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        strike
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${
          editor.isActive("code")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        code
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        clear marks
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        clear nodes
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${
          editor.isActive("paragraph")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        paragraph
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${
          editor.isActive("heading", { level: 1 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h1
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${
          editor.isActive("heading", { level: 2 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h2
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${
          editor.isActive("heading", { level: 3 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h3
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${
          editor.isActive("heading", { level: 4 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h4
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`${
          editor.isActive("heading", { level: 5 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h5
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`${
          editor.isActive("heading", { level: 6 })
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        h6
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${
          editor.isActive("bulletList")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        bullet list
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${
          editor.isActive("orderedList")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        ordered list
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${
          editor.isActive("codeBlock")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        code block
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${
          editor.isActive("blockquote")
            ? "is-active bg-primary text-background"
            : "border border-border bg-background text-foreground"
        } mb-2 mr-1 px-2 rounded`}
      >
        blockquote
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        horizontal rule
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        hard break
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        undo
      </button>
      <button
      type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="border border-border bg-background text-forground mb-2 mr-1 px-2 rounded"
      >
        redo
      </button>
    </>
  );
};



export const TiptapEditor = ({formContent, setFormContent}: FormContent) => {

  const editor = useEditor({
    content: '',
    extensions: [
      // Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, 
        },
      }),
    ],
    onUpdate({ editor }) {
        setFormContent(editor.getHTML())
    },
  });

  useEffect(() => {
    if(editor && editor.getHTML() !== formContent && formContent !== undefined) {
        editor.commands.setContent(formContent);
    }
}, [formContent, editor]);
  
  return (
    <div className="bg-white p-3 rounded-md">
      <MenuBar editor={editor} />
      <EditorContent 
        editor={editor} 
        className="bg-input text-black p-2 border border-border rounded-md"/>
    </div>
  );
};


