import { Github, Linkedin, Twitter, FileText, Code2 } from "lucide-react";

const DevFooter = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/LogicalGuy77",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/harshit-nayan-9913bb266/",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} />,
      url: "https://x.com/HarshitNay80531",
    },
    {
      name: "LeetCode",
      icon: <Code2 size={20} />,
      url: "https://leetcode.com/u/logical_insaan/",
    },
    {
      name: "Resume",
      icon: <FileText size={20} />,
      url:
        "https://drive.google.com/file/d/1czFa0QIXMZ-sFOCvCookuQSwWlf9UdlS/view?usp=sharing",
    },
  ];

  return (
    <>
      <hr className="border-t border-gray-200 mx-auto max-w-full" />
      <footer className="bg-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Harshit Nayan. This project was made
              as an assignment for KoinX.
            </div>
            <nav className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DevFooter;
