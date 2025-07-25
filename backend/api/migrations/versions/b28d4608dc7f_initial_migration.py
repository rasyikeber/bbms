"""Initial migration.

Revision ID: b28d4608dc7f
Revises: 
Create Date: 2025-03-01 20:30:41.092124

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b28d4608dc7f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('full_name', sa.String(length=100), nullable=False),
    sa.Column('phone_number', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('role', sa.Enum('guest', 'stafff', 'admin', name='userrole'), nullable=False),
    sa.Column('pic_url', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('user_id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('full_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
