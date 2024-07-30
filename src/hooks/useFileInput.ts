import { useState, useRef, useCallback, useEffect } from 'react';

// Define types for the options
interface UseFileInputOptions {
  allowVideos?: boolean;
  allowMultiple?: boolean;
}

// Define a type for the file URLs (both images and videos)
type FileUrls = string[];

// Define the return type for the hook
type UseFileInputReturnType = [
  React.InputHTMLAttributes<HTMLInputElement>,
  FileUrls
];

export const useFileInput = (options: UseFileInputOptions = {}): UseFileInputReturnType => {
  const { allowVideos = false, allowMultiple = true } = options;
  const [fileUrls, setFileUrls] = useState<FileUrls>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection and URL creation
  const handleFileChange = useCallback(() => {
    if (fileInputRef.current?.files) {
      const files = Array.from(fileInputRef.current.files);
      const newFileUrls = files
        .filter(file => {
          const isImage = file.type.startsWith('image/');
          const isVideo = file.type.startsWith('video/');
          return isImage || (allowVideos && isVideo);
        })
        .map(file => URL.createObjectURL(file));

      setFileUrls(prevUrls => {
        // Clean up old URLs
        prevUrls.forEach(url => URL.revokeObjectURL(url));
        return newFileUrls;
      });
    }
  }, [allowVideos]);

  // Cleanup function to revoke object URLs
  useEffect(() => {
    return () => {
      fileUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [fileUrls]);

  // Define input props
  const fileInputProps = {
    ref: fileInputRef,
    onChange: handleFileChange,
    type: 'file',
    multiple: allowMultiple,
  };

  return [fileInputProps, fileUrls];
};

export default useFileInput;
