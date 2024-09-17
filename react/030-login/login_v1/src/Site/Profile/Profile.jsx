export default function Profile({ user }) {
    return (
        <>
            <h1>Profile</h1>
            <p>{user.email}</p>
        </>
    );
}
