const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create homepage UI layout",
        date: "2025-12-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve responsive navbar issue",
        date: "2025-12-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project requirements",
        date: "2025-12-05",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate login API",
        date: "2025-12-02",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Backup MongoDB data",
        date: "2025-12-04",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate’s PR",
        date: "2025-12-06",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create Wireframes",
        description: "Prepare wireframes for dashboard",
        date: "2025-12-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "User Testing",
        description: "Conduct usability testing",
        date: "2025-12-05",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Report",
        description: "Document UI bugs",
        date: "2025-12-07",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "SEO Optimization",
        description: "Improve page SEO score",
        date: "2025-12-02",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Content Update",
        description: "Update website content",
        date: "2025-12-04",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Analytics Setup",
        description: "Configure Google Analytics",
        date: "2025-12-06",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy Website",
        description: "Deploy project to server",
        date: "2025-12-03",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Monitoring",
        description: "Monitor server performance",
        date: "2025-12-05",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Check for vulnerabilities",
        date: "2025-12-08",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
