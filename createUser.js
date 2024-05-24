db.createUser({
    user: "codex_user",
    pwd: "codex_password",
    roles: [
      {
        role: "readWrite",
        db: "codex"
      }
    ]
  });