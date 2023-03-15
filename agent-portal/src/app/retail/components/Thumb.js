import { useState } from "react";
import { useEffect } from "react";

const Thumb = (props) => {
    const [thumb, setThumb] = useState([]);
    const [loading, setLoading] = useState(false);
    const { file } = props;
  
    useEffect(() => {
      if (file) {
        setLoading(true);
        let reader = new FileReader();
        reader.onloadend = () => {
          setLoading(false);
          setThumb(reader.result);
        };
        reader.readAsDataURL(file);
      }
      return () => {
        setLoading(false);
        setThumb([]);
      };
    }, [file]);
  
    if (!file) {
      return null;
    }
  
    if (loading) {
      return <p>loading...</p>;
    }
  
    return (
      <>
        <img
          style={{ fontSize: '0.2rem' }}
          src={thumb}
          alt={file.name}
          className="img-thumbnail mt-2 upload-img"
        />
        <br />
      </>
    );
  };
  

  export {Thumb}