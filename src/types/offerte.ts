export interface FormData {
  width: string;
  height: string;
  area: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  hasZolder: string;
  obstacles: {
    radiators: boolean;
    cables: boolean;
    thermostats: boolean;
    pipes: boolean;
  };
  otherObstacles1: string;
  otherObstacles2: string;
  otherObstaclesCount1: string;
  otherObstaclesCount2: string;
  comments: string;
}

export interface BaseInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}