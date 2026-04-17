import { Box, Typography } from "@mui/material";
import type { User } from "../App";
import moment from "moment";

type Props = {
    user: User;
}

export default function UserDetails({ user }: Props) {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                background: theme.palette.search.background,
                width: "100%",
                height: "100%",
                marginBottom: 20,
            })}
        >
            <img src={user.avatar_url} alt="user avatar" height={120} width={120} style={{
                borderRadius: 99,
                margin: 50,
            }} />
            <Box
                sx={{
                    display: "flex",
                    flex: 3,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: 5,
                    marginRight: 5,
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ color: "#FFFFFF" }}>{user.login}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ color: "#FFFFFF" }}>{`Joined ${moment(user.created_at).format("DD MMM YYYY")}`}</Typography>
                </Box>
            </Box>
        </Box >
    );
}