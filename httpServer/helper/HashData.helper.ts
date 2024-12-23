import bcrypt from 'bcrypt';

export class HashText {
  private saltRounds = 10; // Default salt rounds

  async hashPassword(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, this.saltRounds);
  }

  async verifyPassword(plainText: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashedPassword);
  }
}
