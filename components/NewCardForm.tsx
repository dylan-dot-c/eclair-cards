import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";
import { nanoid } from "nanoid";
import { createClient } from "@/lib/supabase/client";
import { addFlashCard } from "@/lib/supabase/queries/flashcards";

type Props = {
  deckID: string;
};

const NewCardForm = ({ deckID }: Props) => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreviewURL, setPreview] = useState("");
  const [imgURL, setImgURL] = useState<string | null>(null);
  const supabase = createClient();

  const addCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ deckID, front, back, image });

    try {
      let uploadedImageUrl = "";

      if (image) {
        uploadedImageUrl = await uploadFile(image);
        setImgURL(uploadedImageUrl);
      }
    } catch (error) {
      console.error("Error adding card:", error);
      alert("Failed to add card");
    }

    console.log(imgURL);
    await addFlashCard(deckID, front, back, imgURL);

    emptyForm();
  };

  async function uploadFile(file: File): Promise<string> {
    try {
      const fileName = `${file.name}-${nanoid(6)}`;

      const { data, error } = await supabase.storage
        .from("flashcard-images")
        .upload(`uploads/card-images/${fileName}`, file);

      if (error) throw error;

      const { data: publicData } = supabase.storage
        .from("flashcard-images")
        .getPublicUrl(data.path);

      return publicData.publicUrl;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  }

  const emptyForm = () => {
    setFront("");
    setBack("");
    setImage(null);
    setPreview("");
  };

  return (
    <form onSubmit={addCard}>
      <div>
        <Label htmlFor="card-question">Question (Front)</Label>
        <Input
          id="card-question"
          type="text"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          placeholder="Enter question for the front side of card"
          required
        />
      </div>

      <div>
        <Label htmlFor="card-answer">Answer (Back)</Label>
        <Input
          id="card-answer"
          type="text"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          placeholder="Enter answer for the back of card"
          required
        />
      </div>

      <div>
        <Label htmlFor="card-image">Image (Shown at front)</Label>
        <Input
          id="card-image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            setImage(file);

            const reader = new FileReader();
            reader.onload = () => {
              setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
          }}
        />
        {imagePreviewURL != "" && (
          <div>
            <p>Image Preview</p>
            <Image
              src={imagePreviewURL}
              width={100}
              height={100}
              alt="image preview"
            />
          </div>
        )}
      </div>

      <Input type="submit" value="Save" />
    </form>
  );
};

export default NewCardForm;
