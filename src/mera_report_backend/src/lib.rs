#[ic_cdk::query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

// struct Report{
//     id: String,
//     progress: String,
//     challenge: String,
// }

// struct User{
//     id: String,
//     is_admin: bool,
//     name: String,
//     email: String,
// }
