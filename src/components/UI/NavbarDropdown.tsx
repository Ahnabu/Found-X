"use client";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@heroui/dropdown";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@heroui/avatar";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/utils/constants";

export default function NavbarDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const { user, setIsLoading: userLoading } = useUser();

    const handleLogout = () => {
        logout();
        userLoading(true);

        if (protectedRoutes.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };

    const handleNavigation = (pathname: string) => {
        router.push(pathname);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar className="cursor-pointer" src={user?.profilePhoto} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key={1} onClick={() => handleNavigation("/profile")}>
                    Profile
                </DropdownItem>
                <DropdownItem
                    key={2}
                    onClick={() => handleNavigation("/profile/settings")}
                >
                    Settings
                </DropdownItem>
                <DropdownItem
                    key={3}
                    onClick={() => handleNavigation("/profile/create-post")}
                >
                    Create Post
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onClick={() => handleLogout()}
                >
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
