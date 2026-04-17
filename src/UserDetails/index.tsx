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
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginRight: 5,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
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
                <Box
                    sx={{
                        flex: 1,
                        color: "#fff",
                        marginTop: 5,
                    }}>
                    {
                        user.bio != null ?
                            <Typography variant="body1">{user.bio}</Typography>
                            : <Typography variant="body1">This user has no bio</Typography>
                    }
                </Box>
                <Box sx={{
                    flex: 1
                }}>Footer row 1</Box>
                <Box sx={{
                    flex: 1
                }}>Footer row 2</Box>
            </Box>
        </Box >
    );
}