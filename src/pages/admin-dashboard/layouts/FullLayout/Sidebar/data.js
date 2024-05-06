import { DashboardOutlined,AspectRatioOutlined ,AssignmentTurnedInOutlined,AlbumOutlined,
  SwitchCameraOutlined,SwitchLeftOutlined, DescriptionOutlined,ManageAccountsOutlined ,
  AutoAwesomeMosaicOutlined} from "@mui/icons-material";


const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard/home",
  },
  {
    title: "Therapist List",
    icon: ManageAccountsOutlined,
    href: "/dashboard/therapist-list",
  },
  {
    title: "User List",
    icon: AspectRatioOutlined,
    href: "/dashboard/user-list",
  },
  {
    title: "Message",
    icon: AssignmentTurnedInOutlined,
    href: "/dashboard/message",
  },
  {
    title: "Appointments",
    icon: AlbumOutlined,
    href: "/dashboard/appointments",
  },
  {
    title: "Complaints",
    icon: SwitchCameraOutlined,
    href: "/dashboard/complaints",
  },
  {
    title: "Settings",
    icon: SwitchLeftOutlined,
    href: "/dashboard/settings",
  },
  // {
  //   title: "Form",
  //   icon: DescriptionOutlined,
  //   href: "/form-layouts/form-layouts",
  // },
  // {
  //   title: "Table",
  //   icon: AutoAwesomeMosaicOutlined,
  //   href: "/tables/basic-table",
  // },
];

export default Menuitems;
